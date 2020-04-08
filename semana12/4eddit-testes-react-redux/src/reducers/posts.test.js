import posts from './posts'
import {setPosts} from '../actions/index'

const mockStore = {
    allPosts: [],
}

describe("Testa reducers", () => {
    test("SET_POSTS", () => {
        const mockText = "Comprar Pão"
        const newSetPostAction = setPosts(mockText)
        const newStore = posts(mockStore, newSetPostAction )
    
        // expect(newStore.allPosts).toHaveLength(1)
        expect(newStore.allPosts[0]).completed.toBe(false)
        expect(newStore.allPosts[0].text).completed.toBe(mockText)
        })
})