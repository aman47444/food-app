import styled from "styled-components";

const defaulttextStyle = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: ${theme.space[0]};
    margin-bottom: ${theme.space[0]};
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body}
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body}
    font-weight: ${theme.fontWeights.medium}
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold}
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body}
`;

const error = (theme) => `
    color: ${theme.colors.ui.error}
`;

const variants = {
  body,
  label,
  caption,
  hint,
  error,
};

export const Text = styled.Text`
  ${({ theme }) => defaulttextStyle(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
