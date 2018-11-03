const initState = {
    projects: [
        {id:'1', title:'This is the title of project aho', content: 'whats up my fellas'},
        {id:'2', title:'This is the title of project ding', content: 'We all are great'},
        {id:'3', title:'This is the title of project dong', content: 'chuk k rakho'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;