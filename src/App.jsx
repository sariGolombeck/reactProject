// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Admin from './components/admin/Admin'
// function App() {
//   return (
//     <div>
//       <Admin />
//     </div>
//   );
// }

// export default App;



import './App.css'
import Admin from './components/admin/Admin'
import { Provider } from 'mobx-react';
import AppStore from './components/store-mobx/AppStore';
function App ()
{
  return (
    <Provider AppStore={AppStore}>
      {/* Rest of your app */}
      <div>
      <Admin /></div>
    </Provider>
  );
};
export default App;
