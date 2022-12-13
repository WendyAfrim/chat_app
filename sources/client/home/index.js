let counseler = () => {
    let self = {};

    self.init = () => {
        document.querySelector('.js-chat-target-counseler').addEventListener('click', (event) => {
            event.preventDefault();
            let chatIsOpen = self.chatIsOpen();

            if(chatIsOpen) {
                self.redirectToChat();
            } else {
                self.displayMessageChatIsClosed();
            }
        });
    };

    self.chatIsOpen = () => {
        const d = new Date();
        let hour = d.getHours();

        if(hour >= 9 && hour < 15) {
            return true;
        }

        return false;
    };

    self.redirectToChat = () => {
        setTimeout(() => {
            window.location.replace("http://localhost:8000/chat");
        }, 1000)
    };

    self.displayMessageChatIsClosed = () => {
        document.querySelector('.js-chat-closed-display').classList.remove('hide');
    };

    return self;
}

counseler().init();