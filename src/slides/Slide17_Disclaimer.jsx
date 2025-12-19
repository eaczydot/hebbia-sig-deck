import React from 'react';
import { SlideContainer } from '../components/SlideContainer';

export const Slide17_Disclaimer = () => {
    return (
        <SlideContainer className="u-flex-center">
            <div style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h2 className="text-hero" style={{ fontSize: '24px', marginBottom: '40px', color: 'var(--color-text-tertiary)' }}>
                    Disclaimer
                </h2>

                <div className="text-cell-data" style={{
                    fontSize: '12px',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    color: 'var(--color-text-secondary)'
                }}>
                    <p style={{ marginBottom: '20px' }}>
                        This presentation is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or services. The information contained herein is confidential and intended solely for the recipient. Any unauthorized reproduction or distribution is prohibited.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Hebbia Inc. makes no representation or warranty, express or implied, as to the accuracy or completeness of the information contained herein. Past performance is not indicative of future results. Projections and efficiency estimates are based on pilot data and may vary depending on specific deployment environments and workflows.
                    </p>
                    <p>
                        The "Hebbia Matrix" methodology and "Neural State Space" visualizations are proprietary concepts of Hebbia Inc. All other trademarks are the property of their respective owners.
                    </p>
                </div>
            </div>
        </SlideContainer>
    );
};
