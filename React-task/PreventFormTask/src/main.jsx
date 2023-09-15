import ReactDOM from 'react-dom/client';
import TopHeader  from './Feature/header';
import "./App.css"
// import { ActivityLevel, Diabetes,Pregnancy, FamilyHistory, FormAbout, HeightWeightComponent, YourGender, Submit } from './Feature/sectionForm';
import { HealthForm } from './Feature/sectionForm';

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <div className='main-container'>
 <TopHeader />
 <hr />
<HealthForm />
<hr />

 </div>
 </>
)
