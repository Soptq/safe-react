import { ReactElement } from 'react'
import styled from 'styled-components'
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation'

import { black400, black500, extraLargeFontSize, largeFontSize, mediumFontSize } from 'src/theme/variables'
import { SafeWidgetComponentProps } from 'src/components/Dashboard/SafeWidget/SafeWidget'

const GasPriceWidget = ({ data, isLoading }: SafeWidgetComponentProps): ReactElement => {
  const result = data?.result || {}
  const { suggestBaseFee, ProposeGasPrice, SafeGasPrice, FastGasPrice } = result

  return (
    <WidgetCard>
      <WidgetTitle>Gas Price</WidgetTitle>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <GasPriceLabel>
            <GasStationIcon /> {~~suggestBaseFee} Gwei
          </GasPriceLabel>
          <GasPriceInfoLabel>
            Low: {SafeGasPrice} | Avg: {ProposeGasPrice} | High: {FastGasPrice}
          </GasPriceInfoLabel>
        </>
      )}
    </WidgetCard>
  )
}

export default GasPriceWidget

const WidgetCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  text-align: center;
  color: ${black500};
  font-size: ${largeFontSize};
`

const WidgetTitle = styled.h2`
  color: ${black500};
  font-size: ${largeFontSize};
  margin: 0;
`

const GasPriceLabel = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${extraLargeFontSize};
  margin: 8px 0;
`

const GasStationIcon = styled(LocalGasStationIcon)`
  margin-right: 4px;
`

const GasPriceInfoLabel = styled.p`
  color: ${black400};
  font-size: ${mediumFontSize};
  margin: 0;
`
