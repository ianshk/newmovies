'use client';

import Script from 'next/script';
import React from 'react';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="c03597db-3e31-48e0-8ae8-5ec09239fa9e"
      />
    </>
  );
}
