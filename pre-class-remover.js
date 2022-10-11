function removeClassFromDocument(className, doc) {
	console.log('in function removeClassFromDocument');
	console.log('class name: ' + className);
	var elementsCollection = doc.getElementsByClassName(className);
	if (elementsCollection != null) {
		console.log('collection not null');
		for (let item of elementsCollection) {
		  console.log("Item: " + item);
		}
		if (elementsCollection.length > 0) {
		  console.log('Found at least 1 element');
		  for (let i = 0; i < elementsCollection.length; i++) {
			var elem = elementsCollection[i];
			console.log(i+ ") Fixing element: " + elem);
			elem.className = elem.className.replace(className, '');
			console.log("ClassName after = " + elem.className);
		  }
		} else {
			console.log("No elements with class found");
		}  
	}
}

function getDocumentOfFirstIframe(doc) {
	console.log('in function getDocumentOfFirstIframe');
	var iframes = doc.getElementsByTagName('iframe');
	if (iframes != null && iframes.length > 0) {
		console.log('Found at least 1 iframe');
		return iframes[0].contentWindow.document;
	} else {
		return null;
	}
}

function removeClassFromAllIframeDocuments(className, doc) {
	console.log('in function removeClassFromAllIframeDocuments');
	console.log('class name: ' + className);
	var iframes = doc.getElementsByTagName('iframe');
	if (iframes != null && iframes.length > 0) {
		console.log('Found at least 1 iframe');
		for (let j = 0; j < iframes.length; j++) {
			removeClassFromDocument(className, iframes[j].contentWindow.document);
		}
	}
}

{
	console.log('in pre-class-remover.js');
	var classToRemove = 'pre';
	var firstIframeDoc = getDocumentOfFirstIframe(document);
	removeClassFromDocument(classToRemove, firstIframeDoc);
}