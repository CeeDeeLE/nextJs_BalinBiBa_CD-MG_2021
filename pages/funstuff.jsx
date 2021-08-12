// Fun-Stuff-Seite
import Layout from '../components/Layout';
import ShuffleText from '../components/ShuffleText';
import ShuffleImages from '@/components/ShuffleImages';

export default function textshuffler() {
  return (
    <Layout title="Text-Shuffler">
      <ShuffleText />
      <ShuffleImages />
    </Layout>
  );
}
