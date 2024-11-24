import AIAdoptionChart from './aiAdoptionRate.tsx';
import DualAxisChart from './aiPriceImpact.tsx';
import XRPPredictionChart from './aiPredict.tsx';
import './app.css';
function App() {
  return (
    <div>
      <AIAdoptionChart></AIAdoptionChart>
      <DualAxisChart></DualAxisChart>
      <XRPPredictionChart></XRPPredictionChart>
    </div>
  );
}

export default App;
