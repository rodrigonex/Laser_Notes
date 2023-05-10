// Sempre que for criado uma nota rota e necessário adicionar o name e se a mesma vai receber algum parametro
export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Login: undefined;
            Home: undefined;
            Notes: any;
            Notes_Continuation: any;
            Notes_List: any;
        }
    }
}
