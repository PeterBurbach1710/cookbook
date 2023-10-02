import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Row = styled(Card)`
    display: flex;
    line-height: 40px;
    margin: 10px 20px;
    box-shadow: 2px 2px 5px 0 rgba(150, 150, 150, 0.5);
`;

type Props = {
  darkmode: boolean;
}

export const Padding = styled.div<Props>`
    padding-left: 20px;
    color: ${({darkmode}) => darkmode ? 'white' : 'black'};
    background-color: ${({darkmode}) => darkmode ? 'black' : 'white'};
`;

export const Title = styled(Padding)`
    min-width: 200px;
`;

/* .row {
    
}

.title {
    min-width: 200px;
}

.padding {
    padding-left: 20px;
}

.button {
    margin: 0 10px;
    
}
 */