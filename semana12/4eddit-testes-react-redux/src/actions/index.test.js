
import {setPosts, setPostDetail, setPostId} from './index'

// Teste das Actions Creators

describe("Teste para as action creators", () => {
    test("SET_POSTS", () => {
        const mockDeDadosSetPosts = "Tô doente, talvez corona, talvez gripe."
        const mockDaAction = setPosts(mockDeDadosSetPosts)

        expect(mockDaAction.type).toEqual('SET_POSTS')
        expect(mockDaAction.payload.posts).toBeDefined()
        expect(mockDaAction.payload.posts).toEqual(mockDeDadosSetPosts)
    })
    test('SET_POST_DETAIL', () => {
        const mockDeDados = "Não funcionou colocar um objeto aqui."
        const mockDaAction = setPostDetail(mockDeDados)

        expect(mockDaAction.type).toEqual('SET_POST_DETAIL')
        expect(mockDaAction.payload.post).toBeDefined()
        expect(mockDaAction.payload.post).toEqual(mockDeDados)
    })
    test('SET_POST_ID', () => {
        const mockDeDados = "123"
        const mockDaAction = setPostId(mockDeDados)

        expect(mockDaAction.type).toEqual('SET_POST_ID')
        expect(mockDaAction.payload.id).toBeDefined()
        expect(mockDaAction.payload.id).toEqual(mockDeDados)
    })
    
})