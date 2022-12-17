import './App.css';
import Add1 from './Add1'
// import States from './components/States';
// import Navigate from './components/useNavigate/Navigate';

function App() {

  let Cards = [{
    projectName: 'Project One',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
    button: 'dark'
  },
  {
    projectName: 'Project Two',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.',
    button:'primary'
  },
  {
    projectName: 'Project Three',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!',
    button:'danger'
    },
  {
    projectName: 'Project Four',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?',
    button:'primary'
  }
  ]
  return (
    <div className="App">

      <br />
      <br />

      <h1 className="my-4">Page Heading
        <small>Secondary Text</small>
      </h1>
      <Add1 data={Cards[0]} /><br />
      <Add1 data={Cards[1]} /><br />
      <Add1 data={Cards[2]} /><br />

      {/* <States /> */}

    </div>
  );
}

export default App;
