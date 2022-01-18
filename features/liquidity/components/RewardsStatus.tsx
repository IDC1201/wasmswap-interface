import { Inline } from 'components/Inline'
import { Text } from 'components/Text'
import { ImageForTokenLogo } from 'components/ImageForTokenLogo'
import { Button } from 'components/Button'

export const RewardsStatus = ({ tokenA, tokenB, disabled = false }) => {
  return (
    <>
      <Inline justifyContent="space-between" css={{ padding: '$20 0 $4' }}>
        <Text variant="primary">Pooling reward</Text>
        {disabled && <Text variant="legend">No rewards expected</Text>}
        {!disabled && (
          <Text variant="legend" color="brand">
            Next reward: $32 in 4hrs
          </Text>
        )}
      </Inline>
      {!disabled && (
        <Inline justifyContent="space-between" css={{ padding: '$12 0' }}>
          <Inline gap={16}>
            <Text variant="header">$289.00</Text>
            <Inline gap={3}>
              <ImageForTokenLogo
                size="large"
                logoURI={tokenA.logoURI}
                alt={tokenA.symbol}
              />
              <Text variant="link">86.931234</Text>
            </Inline>
            <Inline gap={3}>
              <ImageForTokenLogo
                size="large"
                logoURI={tokenB.logoURI}
                alt={tokenB.symbol}
              />
              <Text variant="link">61.821204</Text>
            </Inline>
            <Inline gap={3}>
              <ImageForTokenLogo
                size="large"
                logoURI={tokenA.logoURI}
                alt={tokenA.symbol}
              />
              <Text variant="link">86.931234</Text>
            </Inline>
            <Inline gap={3}>
              <ImageForTokenLogo
                size="large"
                logoURI={tokenB.logoURI}
                alt={tokenB.symbol}
              />
              <Text variant="link">61.821204</Text>
            </Inline>
          </Inline>
          <Button variant="primary">Claim reward</Button>
        </Inline>
      )}
    </>
  )
}
