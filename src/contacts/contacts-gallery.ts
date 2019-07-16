import { autoinject } from 'aurelia-framework';
import { processContent } from 'aurelia-framework';

processContent((viewCompiler, viewResources, element, behaviorInstruction) => {
  console.log(element);
})
@autoinject()
export class ContactsGallery {}
