import './App.css';
import Add1 from './Add1'

function App() {

  let Cards = [{
    projectName: 'Project One',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.'
  },
    {
      projectName: 'Project Two',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.'
    },
    {
      projectName: 'Project Three',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!'
    },
    {
      projectName: 'Project Four',
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?'
    }
  ]
  return (
    <div className="App">
      <Add1 data={Cards[0]} />
      <Add1 data={Cards[1]} />
      <Add1 data={Cards[2]} />
     
    </div>
  );
}

export default App;
