import { Checkbox, Icon, Text } from '@gnosis.pm/safe-react-components'
import React from 'react'
import { AllowedFeatures } from '../../types'
import { StyledSecurityTitle } from 'src/routes/safe/components/Apps/components/SecurityFeedbackModal/styles'
import styled from 'styled-components'
type SecurityFeedbackAllowedFeaturesProps = {
  features: { feature: AllowedFeatures; checked: boolean }[]
  onFeatureSelectionChange: (feature: AllowedFeatures, checked: boolean) => void
}

const SecurityFeedbackAllowedFeatures: React.FC<SecurityFeedbackAllowedFeaturesProps> = ({
  features,
  onFeatureSelectionChange,
}): React.ReactElement => {
  return (
    <>
      <Icon size="md" type="privacyPolicy" />
      <StyledSecurityTitle size="lg">Manage the features the Safe App can use</StyledSecurityTitle>
      <StyledFeaturesContainer>
        <Text size="xl">This app is requesting permission to use:</Text>
        <br />
        {features.map(({ feature, checked }, index) => (
          <Checkbox
            key={index}
            name="checkbox"
            checked={checked}
            onChange={(_, checked) => onFeatureSelectionChange(feature, checked)}
            label={feature}
          />
        ))}
      </StyledFeaturesContainer>
    </>
  )
}

const StyledFeaturesContainer = styled.div`
  padding: 20px 20px 0 20px;
`
export default SecurityFeedbackAllowedFeatures
