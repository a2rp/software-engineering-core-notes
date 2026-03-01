// src/topics/sdlcModels/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px;
            border-radius: 16px;

            background: var(--color-surface);
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .title {
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .chev {
            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .cIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .h3 {
            font-size: 14px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 6px;
        }

        .note {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 8px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 6px;
        }

        .pill {
            padding: 5px 9px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            font-size: 12px;
        }

        .dash {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .section {
            margin-top: 6px;
        }

        .secTitle {
            font-size: 12.5px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .list {
            display: grid;
            gap: 4px;
        }

        .list li {
            font-size: 12.5px;
            color: var(--color-text-secondary);
            padding-left: 12px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 5px;
            height: 5px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 7px;
        }

        .bottomNote {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .bnTitle {
            font-size: 13px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .bnSub {
            font-size: 12.5px;
            color: var(--color-text-muted);
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `,
};
