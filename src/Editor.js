class Editor {
	constructor() {
		this.$editor = document.getElementById('editor');
		this.$saveButton = document.getElementById('save-button');

		this.$blockTitle = document.getElementById('data-block-title');
		this.$blockText = document.getElementById('data-block-text');
		this.$blockImage = document.getElementById('data-block-image');
		this.$blockBackground = document.getElementById('data-block-background');

		this.idBlock = 0
		this.state = [];
	}


	addBlock(block) {
		let template = `
			<div class="editor-block" >
				${this.addToolbar()}
				<div class="delete-block-wrap" >
					<button class="delete-block" >
						<img src="/app/images/icons/delete.png" alt="delete" />
					</button>
				</div>
				<div class="place" >
					${block}
				</div>
			</div>
		`
		this.$editor.insertAdjacentHTML('beforeend', template);

		++this.idBlock;
	}

	deleteBlock() {
		this.$editor.addEventListener('click', event => {
			let deleteBlock = event.target.closest('.delete-block');
			if(deleteBlock) {
				deleteBlock.closest('.editor-block').remove();
				let idDeleteBlock = deleteBlock.closest('.editor-block').querySelector('[data-id-block]').getAttribute('data-id-block');
				this.state = this.state.filter(item => item.id != idDeleteBlock);
			}
		})
	}

	formatObjectStyle(obj) {
		let str = "";
		for (let key in obj) {
			str += key + ":" + obj[key] + ";"
		}
		return str;
	}

	addBlockTitle() {
		let initialStyle = {
			"font-size": "24px",
			"font-weight": 700,
			"color": "#000",
			"width": "100%",
			"text-align": "center"
		};
		let initialText = "Заголовок"

		let block = `
		 	<div data-text-editor contenteditable="true" data-id-block=${this.idBlock} style="${this.formatObjectStyle(initialStyle)}">${initialText}</div>
		`

		let blockObj = {
			"id": this.idBlock,
			"name": "title",
			"style": initialStyle,
			"content": initialText
		}
		this.state.push(blockObj);

		this.addBlock(block);
	}

	addBlockText() {
		let initialStyle = {
			"font-size": "16px",
			"min-height": "350px",
			"color": "#000",
			"width": "100%",
			"text-align": "left"
		};
		let initialText = `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
			fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
			sunt in culpa qui officia deserunt mollit anim id est laborum.
		`;
		let block = `
			<div data-text-editor contenteditable="true" data-id-block=${this.idBlock} style="${this.formatObjectStyle(initialStyle)}">${initialText.trim()}</div>
		`;

		let blockObj = {
			"id": this.idBlock,
			"name": "text",
			"style": initialStyle,
			"content": initialText
		}
		this.state.push(blockObj);

		this.addBlock(block);

	}

	addBlockImage() {
		let initialStyle = {
			"position": "relative",
			"min-height": "200px",
			"width": "100%",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center"
		};
		let initialImage = '/app/images/no-photo.png';
		let block = `
			<div data-id-block=${this.idBlock} style="${this.formatObjectStyle(initialStyle)}">
				<img src="${initialImage}" alt="no-photo" />
			</div>
		`;

		let blockObj = {
			"id": this.idBlock,
			"name": "image",
			"style": initialStyle,
			"image": initialImage
		}
		this.state.push(blockObj);

		this.addBlock(block);
	}

	addBlockBackground() {
		let initialImage = '/app/images/lorem.jpg';
		let initialStyle = {
			"position": "relative",
			"min-height": "200px",
			"width": "100%",
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"background-image": `url('${initialImage}')`,
			"background-size": "cover",
			"background-repeat": "no-repeat",
			"padding": "50px 15px",
			"font-size": "24px",
			"font-weight": 700,
			"color": "#fff",
		};
		let initialText = "Заголовок"

		let block = `
			<div contenteditable="true" data-id-block=${this.idBlock} style="${this.formatObjectStyle(initialStyle)}">
				${initialText}
			</div>
		`;

		let blockObj = {
			"id": this.idBlock,
			"name": "image",
			"style": initialStyle,
			"content": initialText,
			"image": initialImage
			
		}
		this.state.push(blockObj);

		this.addBlock(block);
	}








	getState() {
		this.$saveButton.addEventListener('click', () => {
			console.log(JSON.stringify(this.state));
		//	console.log(this.state);
		})
	}

	init() {
		this.$blockTitle.addEventListener('click', () => {this.addBlockTitle()});
		this.$blockText.addEventListener('click', () => {this.addBlockText()});
		this.$blockImage.addEventListener('click', () => {this.addBlockImage()});
		this.$blockBackground.addEventListener('click', () => {this.addBlockBackground()});

		this.deleteBlock();
		this.getState();

	}
}

let editor = new Editor();
editor.init();
