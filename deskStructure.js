import S from "@sanity/desk-tool/structure-builder";
import { GoHome } from "react-icons/go";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .title("Frontpage")
        .schemaType("page")
        .icon(GoHome)
        .child(S.document().schemaType("page").documentId("frontpage")),
    ]);
