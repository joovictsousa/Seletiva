import { Avatar, Divider, Stack } from '@react-native-material/core';
import { Image, Linking, Pressable, Text, View } from 'react-native';
import { githubLink, linkedinLink, whasappLink } from '../constants/places';
import styles from '../styles/contact';
import qs from 'qs';

export function ContactComponent() {

    async function clickWhatsApp(){
        await Linking.openURL(whasappLink);
    }

    async function clickEmail(){
        const to = 'jvsilva.fne@gmail.com';
        const subject = 'Oportunidade';
        const body = 'Olá, João Victor. \n Estou entrado em contato para informar que gostariamos de nos reunir para discutirmos uma proposta.';

        const query = qs.stringify({
            subject: subject,
            body: body,
        });

        let url = `mailto:${to}`;

        url += `?${query}`;

        await Linking.openURL(url);

    }

    async function clickLinkedin(){
        await Linking.openURL(linkedinLink);
    }

    async function clickGitHub(){
        await Linking.openURL(githubLink);
    }

    return (
        <View style={styles.container}>
            <Stack>
                <View style={styles.viewProfile}>
                    <Avatar style={styles.viewAvatar} image={require('../../assets/iamjoovictor.jpg')} size={100} />
                    <View style={styles.viewText}>
                        <Text style={styles.textBold}>João Victor Silva</Text>
                        <Text>FullStack Developer</Text>
                    </View>
                </View>
                <View style={styles.line}>
                </View>
                <View style={styles.viewButtons}>
                    <Pressable style={styles.buttons}
                        onPress={clickWhatsApp}
                    >
                        <Avatar image={require('../../assets/whatsapp.png')} size={100} />
                    </Pressable>
                    <Pressable style={styles.buttons}
                        onPress={clickEmail}
                    >
                        <Avatar image={require('../../assets/email.png')} size={100} />
                    </Pressable>
                    <Pressable style={styles.buttons}
                        onPress={clickLinkedin}
                    >
                        <Image source={require('../../assets/linkedin.png')} width={120} height={120} style={styles.stretch}></Image>
                    </Pressable>
                    <Pressable
                        onPress={clickGitHub}
                    >
                        <Image source={require('../../assets/github.png')} width={100} height={100} style={styles.stretch}></Image>
                    </Pressable>
                </View>
            </Stack>
        </View>
    );
}