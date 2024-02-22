import { type App } from "vue";

import IbButton from "./ib-button/ib-button.vue";
import IbInput from "./ib-input/ib-input.vue";
import IbModal from "./ib-modal/ib-modal.vue";
import IbModalHeader from "./ib-modal/ib-modal-header/ib-modal-header.vue";
import IbModalContent from "./ib-modal/ib-modal-content/ib-modal-content.vue";
import IbModalFooter from "./ib-modal/ib-modal-footer/ib-modal-footer.vue";
import IbIcon from "./ib-icon/ib-icon.vue";
import IbHeading from "./ib-heading/ib-heading.vue";
import IbVStack from "./ib-v-stack/ib-v-stack.vue";
import IbHStack from "./ib-h-stack/ib-h-stack.vue";

/**
 * Export & install application components for use globally
 */
export default {
	install(app: App): void {
		app.component("IbButton", IbButton);
		app.component("IbInput", IbInput);
		app.component("IbModal", IbModal);
		app.component("IbModalHeader", IbModalHeader);
		app.component("IbModalContent", IbModalContent);
		app.component("IbModalFooter", IbModalFooter);
		app.component("IbIcon", IbIcon);
		app.component("IbHeading", IbHeading);
		app.component("IbVStack", IbVStack);
		app.component("IbHStack", IbHStack);
	}
};