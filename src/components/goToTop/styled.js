import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 60;

        button {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border-light);
            border-radius: 50%;
            color: var(--color-bg);
            background: var(--color-primary);
            cursor: pointer;
            transition: border-color 160ms ease, box-shadow 160ms ease, text-shadow 160ms ease;
        }

        button:hover {
            border-color: var(--color-text-primary);
            box-shadow: 0 0 18px color-mix(in srgb, var(--color-primary) 30%, transparent);
            text-shadow: 0 0 8px color-mix(in srgb, var(--color-bg) 35%, transparent);
        }

        @media (width < 600px) {
            right: 16px;
            bottom: 16px;
        }
    `,
};