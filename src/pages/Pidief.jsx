import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../assets/images/logo.jpg";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 4,
    marginTop: 4,
    textDecoration: "underline",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  image: {
    marginVertical: 8,
    marginHorizontal: 30,
  },
});

// Create Document Component
const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.image} src={logo} />
      <Text style={styles.title}>Fiche hoan'ireo hianatra cours</Text>
      <View style={{ margin: 8 }}>
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 12,
            paddingBottom: 4,
            textDecoration: "underline",
          }}
        >
          Mpianatra
        </Text>
        {data?.map((item) => (
          <View
            key={item.id}
            style={{
              padding: 4,
              width: 450,
              borderBottomColor: "gray",
              borderBottom: 1,
            }}
          >
            <Text style={{ fontSize: 12 }}>
              {item.nom} - {item.examen} - {item.ecole} - {item.contact}
            </Text>
          </View>
        ))}
      </View>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export default MyDocument;
