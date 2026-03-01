import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 20px 0 10px;

        .top {
            margin-bottom: 14px;
        }

        .title {
            font-size: 22px;
            margin-bottom: 8px;
            letter-spacing: 0.3px;
        }

        .sub {
            max-width: 980px;
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 4;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 12px 28px var(--color-shadow);
            position: relative;
        }

        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                var(--color-accent),
                transparent
            );
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .icon {
            width: 34px;
            height: 34px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .icon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 15px;
            letter-spacing: 0.2px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 10px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 12px;
            font-weight: 800;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .note {
            font-size: 12.5px;
            color: var(--color-text-muted);
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
        }

        .list li {
            font-size: 13.5px;
            color: var(--color-text-secondary);
            position: relative;
            padding-left: 14px;
        }

        .list li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `,
};
