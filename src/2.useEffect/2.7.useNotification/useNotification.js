import { useEffect } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/API/notification
// 웹에서 푸시 알림을 보낼 수 있음. 예를 들어 새로운 메시지가 왔을 때 알림을 보내는 것.
const useNotification = (title, options) => {
	if (!('Notification' in window)) {
		return;
	}

	const fireNotif = () => {
		if (Notification.permission !== 'granted') {
			// allow하지 않으면 다시 물어볼 수는 없음.
			Notification.requestPermission().then(permission => {
				if (permission === 'granted') {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotif;
};

export default useNotification;
