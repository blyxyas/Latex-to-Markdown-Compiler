// First time using JS in more than a year and a half, sorry (And first time using TS ever)

"use strict";

import * as vscode from "vscode";
import fs = require("fs");
import { exit } from "process";

export function activate(context: vscode.ExtensionContext) {
	function compileFile(content: string): string {
		let expression: string[] = [];
		let lineArr: string[];
		
		// <======= BLOCKS =======>
		let inBlock: boolean = false;
		let firstBlockIndex: number = 0;
		let lastBlockIndex: number = 0;
		let blockContent: string = "";
		
		// We inspect every line of file
		let lines: string[] = content.split("\n");
		for (let i = 0; i < lines.length; i++) {
			// We check for blocks
			// Delimiters: $ , $$

			// <======== BLOCK EXPRESSIONS =========>	

			if (lines[i].indexOf("$$") !== -1 && lines[i][lines[i].indexOf("$") - 1] !== "\\" && lines[i][lines[i].indexOf("$") - 1] !== "`") {
				inBlock = !inBlock;
				if (inBlock) {
					lines[i] = lines[i].replace("$$", "");
					firstBlockIndex = i;
				}
				else {
					lines[i] = lines[i].replace("$$", "");
					lastBlockIndex = i;

					blockContent = lines.slice(firstBlockIndex, lastBlockIndex + 1).join("");
					lines[i] = `<h3 align="center"><img src="https://render.githubusercontent.com/render/math?math=${encodeURI(blockContent)}" /></div>`;

					for (let toClear = firstBlockIndex; toClear < lastBlockIndex; toClear++) {
						lines[toClear] = "";
					}
				}
			}

			else {
				if (lines[i].indexOf("$") !== -1 && lines[i].indexOf("$$") === -1 && lines[i][lines[i].indexOf("$") - 1] !== "\\" && lines[i][lines[i].indexOf("$") - 1] !== "`") {
					// We replace the inline expression with the img tag
					lineArr = lines[i].split("$");
					for (let j = 0; j < lineArr.length; j++) {
						if (j % 2 !== 0 && lineArr[j - 1] !== "\\") {
							lineArr[j] = `<img src="https://render.githubusercontent.com/render/math?math=${encodeURI(lineArr[j])}" />`;
						};
					};

					// Now we join the array back to a string
					lines[i] = lineArr.join("");
				};
			};

			// We check for inline expressions
		};
		vscode.window.showInformationMessage(lines.join(" "));
		vscode.window.showInformationMessage("Compiling...");

		return lines.join("\n");
	};

	// First, we register a command
	let disposable = vscode.commands.registerCommand("simplelatex.compile", () => {
		// We alert the user
		// Getting the current workspace folder
		if (vscode.workspace.workspaceFolders !== undefined) {
			let wf = vscode.workspace.workspaceFolders[0].uri.path;
			let f = vscode.workspace.workspaceFolders[0].uri.fsPath;
		}

		// Asking the user to specify a path inside the workspace

		if (vscode.window.activeTextEditor !== undefined) {
		vscode.workspace
			.openTextDocument(vscode.window.activeTextEditor.document.uri.fsPath)
			.then((document) => {
				if (document.isDirty) {
					document.save();
				};
				// Now we read the file
				let text = document.getText();
				// Now we write to the file the new content;
				if (vscode.window.activeTextEditor !== undefined) {
					fs.writeFile(vscode.window.activeTextEditor.document.uri.fsPath, compileFile(text), (err) => {
						if (err) {
							let error = vscode.window.createOutputChannel("SimpleLatex Compilation Error");
							error.appendLine("An error ocurred, no more information available.");
							error.show();
							exit();
						}
						else {
							vscode.window.showInformationMessage("File compiled");
						}
					});
				}
			});
		}
	});
}

export function deactivate() {}
