import React, { Component } from 'react';
import Header from '../../headercomponent/Header';
import Footer from '../../footercomponent/Footer';
import Projectsearchbarcomponent from '../../projectcontainer/projectsearchbarcomponent/Projectsearchbar';
import Projectlist from '../../projectcontainer/projectlistcomponent/Projectlist';
import Runlist from '../../projectcontainer/runcontainer/runlist/Runlist';
import Addrun from '../../projectcontainer/runcontainer/addruncontainer/addruncomponent/Addrun';
import SummaryReagents from '../../projectcontainer/runcontainer/summaryReagentsComponent/SummaryReagents';
import AddRunForm from '../../projectcontainer/runcontainer/addruncontainer/addrunformcomponent/AddRunForm';
import Projectcategory from '../../projectcontainer/projectcategorycomponent/Projectcategory';
import SummaryButton from '../../projectcontainer/runcontainer/summaryReagentsComponent/summaryButton/SummaryButton';


//example imports
import ListProjects from '../../dbProjectDisplayExample/ListProjects';
//import ListStages from '../../dbProjectDisplayExample/ListStages';
//<ListStages/>

import AddProjectForm from '../../dbProjectDisplayExample/AddProjectForm';
import Logout from '../../logoutcomponent/Logout';



class MainPageFE extends Component {

    state = {
        // showMe: false,
        // showMeCategory: false,
        // showMeRun: false,
        // showMeAddRunForm: false,
        // showMeSummaryReagents: false,
    }

    operation = (project) => {
        this.setState({ showMe: project });
           // ! everytime you click it will change the state
        //replace project with the following code in order to show and hide after every click
        // !this.state.showMe
    }
    handleCategory = (projectCategory) => {
        projectCategory = !this.state.showMeCategory;
        this.setState({ showMeCategory: projectCategory });
    }
    handleRun= (projectRun) => {
        projectRun = !this.state.showMeRun;
        this.setState({ showMeRun: projectRun});
    }
    handleAddRunForm= (projectAddRunForm) => {
        projectAddRunForm = !this.state.showAddRunForm;
        this.setState({ showMeAddRunForm: projectAddRunForm});
    }
    handleSummaryReagents= (projectSummaryReagents) => {
        projectSummaryReagents = !this.state.showSummaryReagents;
        this.setState({ showMeSummaryReagents: projectSummaryReagents});
    }

    render() {
        return (
            <div className='App'>
                <Logout/>
                <Header />
                <ListProjects/>
                <AddProjectForm/>
                <Projectsearchbarcomponent operation={this.operation} />
                {this.state.showMe ? <Projectlist handleCategory={this.handleCategory} /> : null}
                {this.state.showMeCategory ? <Projectcategory handleRun={this.handleRun} /> : null}
                {this.state.showMeRun ? <Addrun handleAddRunForm={this.handleAddRunForm}/> : null}
                {this.state.showMeRun ? <Runlist  />: null}
                {this.state.showMeAddRunForm ?<AddRunForm />: null}
                {this.state.showMeRun ? <SummaryButton handleSummaryReagents={this.handleSummaryReagents}/> : null}
                {this.state.showMeSummaryReagents ?<SummaryReagents />: null}
                <Footer />
            </div>
        )
    }
}
export default MainPageFE;