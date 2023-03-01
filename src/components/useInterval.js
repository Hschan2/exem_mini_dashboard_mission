import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
    // 최근 들어온 콜백을 저장할 Ref
    // useState를 사용하지 않은 이유는 리렌더링이 발생하기 때문 (setState에서 값 변경이 이뤄졌을 시, 리렌더링)
    const savedCallback = useRef(null);

    useEffect(() => {
        // 콜백이 바뀔 때마다 Ref 업데이트
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const executeCallback = () => {
        savedCallback.current();
        };

        // Delay에 맞춰 Interval을 새로 실행
        const timerId = setInterval(executeCallback, delay);

        // Unmount될 때, ClearInterval 실행
        return () => clearInterval(timerId);
    }, []);
};

export default useInterval;