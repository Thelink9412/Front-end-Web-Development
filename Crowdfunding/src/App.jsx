import Project from "./Project";
import projectsList from "./projectsList";
function App() {

  return (
    <>
      <h2>Crowdfunding App</h2>
      <div className='main-container'>
        {projectsList.map(project => {
          return <Project key={project.id} id={project.id} name={project.name} goal={project.goal} />
        })}
      </div>
    </>
  );
}

export default App
