import { check } from 'k6';
import { browser } from 'k6/browser';

const BASE_URL = __ENV.BASE_URL || 'https://seu-sistema.com';
const LOGIN_PATH = __ENV.LOGIN_PATH || '/login';
const TARGET_PATH = __ENV.TARGET_PATH || '/pagina-especifica';

const USERNAME = __ENV.USERNAME || 'seu-usuario';
const PASSWORD = __ENV.PASSWORD || 'sua-senha';

const USER_SELECTOR = __ENV.USER_SELECTOR || 'input[name="username"]';
const PASS_SELECTOR = __ENV.PASS_SELECTOR || 'input[name="password"]';
const SUBMIT_SELECTOR = __ENV.SUBMIT_SELECTOR || 'button[type="submit"]';
const PAGE_MARKER_SELECTOR = __ENV.PAGE_MARKER_SELECTOR || 'h1';

export const options = {
    scenarios: {
        ui: {
            executor: 'shared-iterations',
            vus: 1,
            iterations: 1,
            options: {
                browser: {
                    type: 'chromium',
                },
            },
            exec: 'browserTest',
        },
    },
};

export async function browserTest() {
    const page = await browser.newPage();

    try {
        await page.goto(`${BASE_URL}${LOGIN_PATH}`, { waitUntil: 'networkidle' });

        await page.locator(USER_SELECTOR).fill(USERNAME);
        await page.locator(PASS_SELECTOR).fill(PASSWORD);

        await Promise.all([
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            page.locator(SUBMIT_SELECTOR).click(),
        ]);

        check(page, {
            'login realizado': (p) => !p.url().includes(LOGIN_PATH),
        });

        await page.goto(`${BASE_URL}${TARGET_PATH}`, { waitUntil: 'networkidle' });

        const marcadorPagina = page.locator(PAGE_MARKER_SELECTOR);
        await marcadorPagina.waitFor();

        check(page, {
            'navegou para a página alvo': (p) => p.url().includes(TARGET_PATH),
        });

        await page.screenshot({ path: 'Modulo4/evidencia-login.png' });
    } finally {
        await page.close();
    }
}

export default browserTest;