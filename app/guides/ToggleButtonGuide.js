import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { ToggleButton } from '@zesty-io/core/dist/ToggleButton'

export class ToggleButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        <ToggleButton />
        <ToggleButton onValue="TESTING" offValue="213512346" />
        <ToggleButton default={true} />
        <ToggleButton disabled={true} />
        <CodeCard header="Usage" height={250} open>
          // usage guide here
        </CodeCard>

        <CodeCard header="Code" height={250}>
          // component code here
        </CodeCard>
      </React.Fragment>
    )
  }
}
