import ReactDOM from 'react-dom/client';
import MissileLaunching from './1.Task/3.task';
import { NameInputs } from './1.Task/Name';
import { ButtonChange } from './1.Task/2.task';
import { ImageChange } from './1.Task/ImageChanging';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <MissileLaunching />
  <hr />
  <NameInputs />
  <hr />
  <ButtonChange />
  <hr />
  <ImageChange />
  </>
)