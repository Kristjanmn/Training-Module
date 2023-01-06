import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
import CommonIntents from 'pages/Training/Intents';
import Responses from 'pages/Training/Responses';
import Configuration from 'pages/Training/Configuration';
import Stories from 'pages/Training/Stories';
import StoriesDetail from 'pages/Training/Stories/StoriesDetail';
import Slots from 'pages/Training/Slots';
import SlotsNew from 'pages/Training/Slots/SlotsNew';
import Forms from 'pages/Training/Forms';
import FormsNew from 'pages/Training/Forms/FormsNew';
import History from 'pages/HistoricalConversations/History';
import Appeals from 'pages/HistoricalConversations/Appeals';
import IntentsOverview from 'pages/ModelBankAndAnalytics/IntentsOverview';
import Testcases from 'pages/ModelBankAndAnalytics/Testcases';

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to='/treening/treening/teemad' />} />
        <Route path='/treening/treening/teemad' element={<CommonIntents />} />
        <Route path='/treening/treening/vastused' element={<Responses />} />
        <Route path='/treening/treening/konfiguratsioon' element={<Configuration />} />
        <Route path='/treening/treening/kasutuslood' element={<Stories />} />
        <Route path='/treening/treening/kasutuslood/:id' element={<StoriesDetail />} />
        <Route path='/treening/treening/pilud' element={<Slots />} />
        <Route path='/treening/treening/pilud/uus' element={<SlotsNew />} />
        <Route path='/treening/treening/vormid' element={<Forms />} />
        <Route path='/treening/treening/vormid/uus' element={<FormsNew />} />
        <Route path='/treening/ajaloolised-vestlused/ajalugu' element={<History />} />
        <Route path='/treening/ajaloolised-vestlused/poordumised' element={<Appeals />} />
        <Route path='/treening/mudelipank-ja-analuutika/teemade-ulevaade' element={<IntentsOverview />} />
        <Route path='/treening/mudelipank-ja-analuutika/testlood' element={<Testcases />} />
      </Route>
    </Routes>
  );
};

export default App;
