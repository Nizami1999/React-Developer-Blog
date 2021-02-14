import EnterPost from './EnterPost/EnterPost';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <EnterPost />
            <Post message="Hello my name is Nizami and I have been evolving in the sphere of IT" likes="132" />
            <Post message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus ratione accusamus molestias modi ullam? Illum similique alias dolor libero velit exercitationem sunt quis, ex consequuntur laudantium atque. Deserunt dolore possimus dolores, suscipit corporis iure repellendus laudantium? Illo ullam cupiditate architecto quos tempore distinctio laudantium optio repellat facilis dolor hic, ipsum exercitationem dolorum ipsam neque aspernatur libero ex aliquam error quibusdam illum maxime qui. Veritatis, veniam ipsa? Consequatur sunt eligendi quisquam recusandae explicabo pariatur fugit est architecto, aliquam libero iusto? Dolorem quo ratione earum dolorum consequatur est non possimus libero cupiditate et assumenda accusamus, maxime delectus modi in molestiae? Quos?" likes="213" />
            <Post message="Hello my name is Nizami" likes="241" />
            <Post message="Hello" likes="381" />
        </div>
    )
}

export default MyPosts;
