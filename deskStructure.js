import S from "@sanity/desk-tool/structure-builder";
import { GoHome, GoSettings } from "react-icons/go";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .title("Frontpage")
        .schemaType("page")
        .icon(GoHome)
        .child(S.document().schemaType("page").documentId("frontpage")),
      S.documentListItem()
      .schemaType('siteSettings')
      .title('Site settings')
      .icon(GoSettings)
      .child(
        S.document()
          .schemaType('siteSettings')
          .documentId('siteSettings')
      ),
    ]);
