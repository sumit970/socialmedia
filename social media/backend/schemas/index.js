import {defineConfig} from 'sanity'
import user from './user'
import comment from './comment'
import pin from './pin'
import Save from './save'
import postedBy from './postedBy'
export const schemaTypes = [
    user,comment,pin,Save,postedBy
    
]
