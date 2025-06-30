'use client'

import { Suspense } from 'react'
import { GoogleTagManagerScripts } from './GoogleTagManagerScripts'
import { trackingConfig } from '../lib/config.tracking'


export const GoogleTagManager = () => {

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.gtmId}`}
          height="0"
          width="0"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        ></iframe>
      </noscript>
      {/* We need to use Suspense in order to access useSearchParams (see https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout) */}
      <Suspense>
        <GoogleTagManagerScripts gaId={trackingConfig.gtmId} />
      </Suspense>
    </>
  )
}
export default GoogleTagManager
