import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { HeaderBar } from '../../components/HeaderBar';
import { SlideDeck } from '../../templates/SlideDeck';

import { Slide1_Cover } from '../../slides/Slide1_Cover';
import { Slide2_ExecutiveSummary } from '../../slides/Slide2_ExecutiveSummary';
import { Slide3_StrategicContext } from '../../slides/Slide3_StrategicContext';
import { Slide4_TheConstraint } from '../../slides/Slide4_TheConstraint';
import { Slide5_ValueThesis } from '../../slides/Slide5_ValueThesis';
import { Slide6_IntroducingHebbia } from '../../slides/Slide6_IntroducingHebbia';
import { Slide7_HowItWorks } from '../../slides/Slide7_HowItWorks';
import { Slide8_UseCaseTrading } from '../../slides/Slide8_UseCaseTrading';
import { Slide9_UseCaseQuant } from '../../slides/Slide9_UseCaseQuant';
import { Slide10_UseCaseLegal } from '../../slides/Slide10_UseCaseLegal';
import { Slide11_ValueCapacity } from '../../slides/Slide11_ValueCapacity';
import { Slide12_ValueEfficiency } from '../../slides/Slide12_ValueEfficiency';
import { Slide13_ROI } from '../../slides/Slide13_ROI';
import { Slide14_PilotPlan } from '../../slides/Slide14_PilotPlan';
import { Slide15_Security } from '../../slides/Slide15_Security';
import { Slide16_Rollout } from '../../slides/Slide16_Rollout';
import { Slide17_Integration } from '../../slides/Slide17_Integration';
import { Slide18_Competitive } from '../../slides/Slide18_Competitive';
import { Slide19_Risks } from '../../slides/Slide19_Risks';
import { Slide20_Conclusion } from '../../slides/Slide20_Conclusion';
import { Slide21_ReasoningEngine } from '../../slides/Slide21_ReasoningEngine';
import { Slide22_MatrixDeepDive } from '../../slides/Slide22_MatrixDeepDive';
import { Slide18_References } from '../../slides/Slide18_References';

const SLIDES = [
  Slide1_Cover,
  Slide2_ExecutiveSummary,
  Slide3_StrategicContext,
  Slide4_TheConstraint,
  Slide5_ValueThesis,
  Slide6_IntroducingHebbia,
  Slide21_ReasoningEngine,
  Slide7_HowItWorks,
  Slide22_MatrixDeepDive,
  Slide15_Security,
  Slide8_UseCaseTrading,
  Slide9_UseCaseQuant,
  Slide10_UseCaseLegal,
  Slide11_ValueCapacity,
  Slide12_ValueEfficiency,
  Slide13_ROI,
  Slide14_PilotPlan,
  Slide16_Rollout,
  Slide17_Integration,
  Slide18_Competitive,
  Slide19_Risks,
  Slide20_Conclusion,
  Slide18_References,
];

export default function HebbiaCaseStudy() {
  return (
    <SlideDeck
      slides={SLIDES}
      renderHeader={({ currentSlide, totalSlides }) => (
        <HeaderBar currentSlide={currentSlide} totalSlides={totalSlides} />
      )}
      renderChrome={() => (
        <Link to="/" className="site-fab" aria-label="Back to library">
          <ArrowLeft size={16} />
          <span>Library</span>
        </Link>
      )}
    />
  );
}

