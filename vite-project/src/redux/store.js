import {configureStore} from
"@reduxjs/toolkit";

import Baskets from "./reducers/articles";

export default configureStore({
    reducer: {
        basket: Baskets,
    }
})
