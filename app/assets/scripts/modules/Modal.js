import $ from "jquery";

class Modal {
    constructor(){
        this.openModalButton = $('.open-modal');
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
        
    }
    
    events() {
        //clicking the open modal Button
        this.openModalButton.click(this.openModal.bind(this));
        //clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        //push any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    
    keyPressHandler(e) {
        if(e.keyCode == 27){
            this.closeModal();
        }
    }
    
    openModal(){
        this.modal.addClass("modal__is-visible");
        return false;
    }
    
    closeModal(){
        this.modal.removeClass("modal__is-visible");
    }
    
}

export default Modal;