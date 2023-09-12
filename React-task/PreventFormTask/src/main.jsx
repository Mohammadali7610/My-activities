import ReactDOM from 'react-dom/client';
import TopHeader  from './Feature/header';
import "./App.css"
import {FormSection} from './Feature/sectionForm';

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <div className='main-container'>
 <TopHeader />
 <FormSection />
 </div>
 </>
)
