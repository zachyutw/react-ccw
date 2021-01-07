interface ThunkDispatcherConfig {
    promise: Promise<any>;
    success(params: any): void;
    loading(): void;
    fail(error: any): void;
    dispatch(action: any): void;
}

const thunkDispatcher = async (props: ThunkDispatcherConfig) => {
    const { promise, success, loading, fail, dispatch } = props;
    dispatch(loading());
    try {
        const data = await Promise.resolve(promise);
        dispatch(success(data));
    } catch (err) {
        dispatch(fail(err));
    }
};

export default thunkDispatcher;
