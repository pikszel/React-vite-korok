import './App.css'
import { DiscComponent } from './DiscComponent';

export const App = () => {
  return (
    <div className="row d-flex justify-content-center gap-3">  
    <DiscComponent width="140px" height="140px" backgroundColor="red" count={0} />
    <DiscComponent width="140px" height="140px" backgroundColor="green" count={0} />
    <DiscComponent width="140px" height="140px" backgroundColor="blue" count={0} />
    </div>
  )
}
