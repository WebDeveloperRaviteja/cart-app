const initialState ={
    filter_name :"men's clothing"
}

export default function filter_name(state=initialState,action){
    const {type,payload} = action;

    switch(type){
        case "SETFILTER" :
            return {...state,filter_name:payload}

            case "RESETFILTER":
                return {...state,filter_name:"men's clothing"}

                default : return state;
    }

}