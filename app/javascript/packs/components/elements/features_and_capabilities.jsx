import React from 'react';
import { Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';

export default function FeaturesAndCapabilities (props) {
  const columnWidth = props.columnWidth || 6;
  return props.array.map((featureRow, featureKey) => (
    <Row key={featureKey} className={'feature_and_capabilities ' + props.className} >
      {
        featureRow.map((feature, itemKey) => (
          <Col key={itemKey} className={feature.imgClass}  xl={columnWidth}>
            <Translate value={feature.subtitle} tag='h3' />
            <Translate value={feature.subdescription} tag='p' dangerousHTML/>
            {feature.subdescriptionSecond && <Translate value={feature.subdescriptionSecond} tag='p' />}
          </Col>
        ))
      }
    </Row>
  ));
}
