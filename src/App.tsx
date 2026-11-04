/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicHome from './components/public/PublicHome';

import CareerHubDashboard from './components/hub/CareerHubDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/hub" element={<CareerHubDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
