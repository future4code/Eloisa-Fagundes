
import {setPosts} from './index'

// Teste das Actions Creators

describe("Teste para as action creators", () => {
    test("SET_POSTS", () => {
        const mockDeDadosDeMentira = "Tô doente, talvez corona, talvez gripe."
        const mockDaAction = setPosts(mockDeDadosDeMentira)

        expect(mockDaAction.type).toEqual('SET_POSTS')
        expect(mockDaAction.payload.posts).toBeDefined()
        expect(mockDaAction.payload.posts).toEqual(mockDeDadosDeMentira)
    })
})