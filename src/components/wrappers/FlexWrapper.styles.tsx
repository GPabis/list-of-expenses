import styled from 'styled-components';

interface FlexWrapperProps {
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-evenly' | 'space-around' | 'space-between';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-evenly' | 'space-around' | 'space-between';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
`;

export default FlexWrapper;
